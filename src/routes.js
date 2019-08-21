import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import KitchenSink from './components/views/KitchenSink.vue';


import Form1 from './components/views/Form1.vue';
import Form2 from './components/views/Form2.vue';
import Form3 from './components/views/Form3.vue';
import Form4 from './components/views/Form4.vue';

import Start from './components/views/Start.vue';
import Start2 from './components/views/Start2.vue';
import Start3 from './components/views/Start3.vue';

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path:'/start',
    component: Start
  },
  {
    path:'/start2',
    component: Start2
  },
  {
    path:'/start3',
    component: Start3
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'action1',
        alias: '',
        component: Form1,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'action2',
        alias: '',
        component: Form2,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'action3',
        alias: '',
        component: Form3,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'action4',
        alias: '',
        component: Form4,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },





      {
        path: 'kitchensink',
        alias: '',
        component: KitchenSink,
        name: 'KitchenSink',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
