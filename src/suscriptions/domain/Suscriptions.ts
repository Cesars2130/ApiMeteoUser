export class Subscription {
  constructor(
    readonly id_subscription: number,
    readonly active_plan_id: number,
    readonly user_id: number,
    readonly plan_expiration: string
  ) {}
}
