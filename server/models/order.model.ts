import mongoose, { Document, Model, Schema } from "mongoose";
export interface IOrder extends Document {
  courseId: string;
  userId: string;
  paymentInfo: object;
}
const orderSchema = new Schema<IOrder>(
  {
    courseId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    paymentInfo: {
      type: Object,
      // required: true,
    },
  },
  { timestamps: true }
);

const OrderModel: Model<IOrder> = mongoose.model("Order", orderSchema);

export default OrderModel;

//we wont really have prices, but for future references if we ever need we keep this an option.
