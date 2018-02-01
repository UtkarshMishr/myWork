import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
// import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
//import SettingView from './components/views/Users.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import UserSearchView from './components/views/UserSearch.vue'
import UserCreateEditView from './components/views/UserCreateEdit.vue'
import timesheetCreate from './components/views/timesheetSubmit.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
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
      }, /*, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      } */ {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }/*, {
        path: 'user',
        component: SettingView,
        name: 'Users',
        meta: {description: 'User settings page'}
      }*/, {
        path: 'userSearch',
        component: UserSearchView,
        name: 'UsersSearch',
        meta: {description: 'User settings page'}
      }, {
        path: 'userCreateEdit',
        component: UserCreateEditView,
        name: 'UsersCreateEdit',
        meta: {description: 'User settings page'}
      }, {
        path: 'timesheetSubmit',
        component: timesheetCreate,
        name: 'timesheetSubmit',
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
