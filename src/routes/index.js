import { DefaultLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Phim from '~/pages/Phim';
import Lichchieu from '~/pages/Lichchieu';
import Account from '~/';
// khong can login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/phim', component: Phim },
    { path: '/lichchieu', component: Lichchieu },
];
//can login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
