class Order {
  id: number;
  items: string[];
  isPaid: boolean;
}

class ConfirmOrder extends Order {
  markAsPaid(): void {
    this.isPaid = true;
  }
}
class DraftOrder extends Order {
  markAsPaid(): void {
    throw new Error("Draft orders can't be payed");
  }
}
