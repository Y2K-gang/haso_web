export const paths = {
    login: '/',
    signup: '/signup',
    main: '/main',
    clientList: '/clientList',
    businessHistory: `/businessHistory/:userId`,
    statement: '/statement/:userId/:productId',
    statementReceiver: '/statement/:userId/:productId/receiver',
    statementProvider: '/statement/:userId/:productId/provider',
    addClient: '/addClient?',
    addBusiness: '/addBusiness'
} as const;