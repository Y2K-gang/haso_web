export const paths = {
    login: '/',
    signup: '/signup',
    main: '/main',
    myInformation: '/myInformation',
    myPosts: '/myInformation/myPosts',
    infoEdit: '/myInformation/informationEdit',
    clientList: '/clientList',
    businessHistory: `/businessHistory/:userId`,
    statement: '/statement/:userId/:productId',
    statementReceiver: '/statement/:userId/:productId/receiver',
    statementProvider: '/statement/:userId/:productId/provider',
    addClient: '/addClient?',
    addBusiness: '/addBusiness'
} as const;