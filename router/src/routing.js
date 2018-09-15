import User from './components/user/User.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

// for a learning purposes this for used before the 'routes' below this
// export default {
// export const routes = [{
//     path: '/user',
//     component: User,
//     children: [{
//         path: '',
//         component: UserStart
//     }, {
//         path: ':id',
//         component: UserDetail,
//         name: 'userDetail'
//     }, {
//         path: ':id/edit',
//         component: UserEdit,
//         name: 'userEdit'
//     }]
// }, {
//     path: '',
//     component: Home
// }];

export const routes = [{
    path: '/user',
    components: {
        default: User,
        'view-bottom': Header
    },
    children: [{
        path: '',
        component: UserStart
    }, {
        path: ':id',
        component: UserDetail,
        name: 'userDetail'
    }, {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
    }]
}, {
    path: '',
    components: {
        default: Home,
        'view-top': Header
    }
}];