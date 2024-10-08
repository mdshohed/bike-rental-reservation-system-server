import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BikeRoutes } from "../modules/Bike/bike.route";
import { RentalRoutes } from "../modules/Rental/rental.route";
import { UserRoutes } from "../modules/User/user.route";
import { StripeRoutes } from "../modules/Stripe/stripe.route";
import { CouponRoutes } from "../modules/Coupon/coupon.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/rentals",
    route: RentalRoutes,
  },
  {
    path: "/coupons",
    route: CouponRoutes,
  },
  {
    path: "/create-payment-intent",
    route: StripeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
