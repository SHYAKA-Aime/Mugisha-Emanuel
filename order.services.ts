import Order from "../database/models/order.model";


export class orderService {
  static async getOrdertByid(orderId: string) {
    return await Order.findOne({ where: { orderId: orderId } });
  }
}
