import { cartDetails } from "@/gql/fragments"

export const deleteCartCouponMutation = `
${cartDetails}

mutation deleteCartCoupon($cartId: String!, $couponCode: String!) {
    deleteCartCoupon(cartId: $cartId, couponCode: $couponCode) {
        ...cartDetails
    }
}`
