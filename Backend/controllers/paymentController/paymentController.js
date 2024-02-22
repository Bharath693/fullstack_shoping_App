const express = require("express");
const router = express.Router();
const User = require("../../models/User")
const OrderDetails = require("../../models/OrderModel");
const products = require("../../models/Products")
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports.processPaymnet = (async (req,res) =>{
     let {cart, id} = req.body;
     let user = await User.findOne({_id:id});
     if(!user) {
      res.status(404).json({err:"user not found"})
     }
    try {
        // Retrieve customer details from the request or your database
        const customerEmail = "bharathraj693@gmail.com"; // Example email
        let shippingId = "shr_1OmACISAsN40Y70adSeVezle";

      let orderData = cart.map((item) =>{
          return{
            _id: item._id,
            size: item.size,
            color: item.color,
            quantity: item.quantity
          }
        })
    
        const customer = await stripe.customers.create({
           email: user?.email,
           metadata: {
              cart: JSON.stringify(orderData)
           }
        })
        // Create checkout session with customer details
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          shipping_address_collection: {
            allowed_countries: ["IN"], // Allow shipping address collection in India
          },
          line_items: cart.map((item) =>{
            const percentage = Number(item.discount) / 100;
                  let price = Number(item.price);
                  let discountPrice = price - price * percentage;
                  discountPrice = discountPrice * 100;
                  discountPrice = parseFloat(discountPrice);
                  discountPrice = discountPrice.toFixed(1) // if we get more decimals after . it will accept only one i.e 3456.23243 => 3456.2
            return{
                price_data: {
                    currency:"inr",
                    product_data: {
                        name:item.title
                    },
                    unit_amount: Number(discountPrice)
                },
                quantity:item.quantity
            }
          }),
          mode: "payment",
          success_url: `${process.env.CLIENT}/user?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.CLIENT}/cart`,
          // customer_email: userData?.email,
          customer: customer.id,
          shipping_options: [
            {
              shipping_rate: shippingId,
            },
          ],
        });
    
        res.json({ url: session.url });
      } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("Error creating checkout session");
      }
})

module.exports.checkoutSession = async (request, response) => {
  const sig = request.headers["stripe-signature"];

  let event;
 
  try {
    event = stripe.webhooks.constructEvent(
      request.rawBody,
      sig,
      process.env.END_POINT_SECRET
    );
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    case "checkout.session.completed":
      const data = event.data.object;
      let customer = await stripe.customers.retrieve(data.customer);
      customer = JSON.parse(customer?.metadata?.cart);
      customer.forEach(async ctr => {
        try {
            await OrderDetails.create({
            productId: ctr._id,
            size:ctr.size,
            color:ctr.color,
            quantities:ctr.quantity,
            address: data.customer_details.address
          })
          let product = products.findOne({_id:id});
          if(product) {
            let stock = product.stock - ctr.stock;
            await product.findByIdAndUpdate(ctr._id, {stock}, {new: true})
          }
        } catch (error) {
          return response.status(500).json('internal server error')
        } 
      });
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
}