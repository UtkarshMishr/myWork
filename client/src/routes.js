/* eslint-disable */
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
import UserSubmit from './components/views/UserSubmit.vue'
import timesheetSearch from './components/views/timesheetSearch.vue'
import timesheetSubmit from './components/views/timesheetSubmit.vue'
import timesheetCreate from './components/views/timesheetCreatePage.vue'
import projectSubmit from './components/views/projectSubmit.vue'
import projectCreate from './components/views/projectCreate.vue'
import projectSearch from './components/views/projectSearch.vue'

// Routes
const routes = [
  {
    path: '/login',
    name: 'login',
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
        path: 'UserSubmit',
        component: UserSubmit,
        name: 'UserSubmit',
        meta: {description: 'User Submission page'}
      }, {
        path: 'timesheetSubmit',
        component: timesheetSubmit,
        name: 'timesheetSubmit',
        meta: {description: 'Timesheet Submission Page'}
      },
      {
        path: 'timesheetSearch',
        component: timesheetSearch,
        name: 'timesheetSearch',
        meta: {description: 'Timesheet Search Page'}
      }, {
        path: 'timesheetCreate/:id/create',
        component: timesheetCreate,
        name: 'timesheetCreate',
        props: true,
        meta: {description: 'Timesheet Creation page'}
      },
      {
        path: 'projectSubmit',
        component: projectSubmit,
        name: 'projectSubmit',
        meta: {description: 'Project Submit Page'}
      },
      {
        path: 'projectCreate',
        component: projectCreate,
        name: 'projectCreate',
        meta: {description: 'Project Create Page'}
      },
      {
        path: 'projectSearch',
        component: projectSearch,
        name: 'projectSearch',
        meta: {description: 'Project Search Page'}
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
