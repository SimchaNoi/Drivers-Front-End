export const GlobalComponent = {
    // Api Calling
    API_URL: 'https://api-node.themesbrand.website/',
    headerToken: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },

    // Auth Api
    AUTH_API: "https://api-node.themesbrand.website/auth/",

    // Products Api
    product: 'apps/product',
    productDelete: 'apps/product/',

    // Orders Api
    order: 'apps/order',
    orderId: 'apps/order/',

    // Customers Api
    customer: 'apps/customer',





    // API OF MY APPLICATION
    //url for CROD Api  
    DB_API: "http://localhost:22297/api/v1/",

    // end points
    AREA:'area/',
    CAL_LEVEL:'carlevel/',
    CAR_SIZE:'carsize/',
    CITY:'city/',
    COM_DRIVER:'comdriver/',
    COMMUNITY:'community/',
    COMPANY:'company/',
    CUSTOMER:'customer/',
    DRIVERS:'driver/',
    PERMISSION:'permissioin/',
    PRICE:'price/',
    TEAM:'team/',
    TRAVEL:'travel/',
    USHER:'usher/',

    ACCOUNT_API: "http://localhost:22297/api/account/",

    LOG_IN:"signIn/",
    REGISTER:"register/"

}