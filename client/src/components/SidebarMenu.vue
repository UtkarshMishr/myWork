<template>
  <div>
  <ul class="sidebar-menu">
    <li class="header" style="font-weight: bold; font-family: Roboto; font-size: 14px; padding-bottom: 4px; padding-top: 4px">Tools</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <!-- Projects Section -->
    <li class="header" style="font-weight: bold; font-family: Roboto; font-size: 14px; padding-bottom: 4px; padding-top: 4px">Project Management</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-cubes text-warning"></i> <span>Projects</span>
        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
      </a>
      <ul class="treeview-menu">
        <li><router-link to="/timesheetSubmit"><i class="fa fa-cube text-warning"></i> Project Search</router-link></li>
        <li><router-link to="/timesheetSubmit"><i class="fa fa-puzzle-piece text-warning"></i> Project Create</router-link></li>
      </ul>
    </li>
    <!-- ./Projects Section -->
   <!--
    <router-link tag="li" class="pageLink" to="/user">
      <a>
        <i class="fa fa-user-plus" aria-hidden="true"></i>
        <span class="page">Users</span>
      </a>
    </router-link>
    -->
    <!-- TimeSheet Section -->
    <li class="header" style="font-weight: bold; font-family: Roboto; font-size: 14px; padding-bottom: 4px; padding-top: 4px">Time Management</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-calendar-check-o text-aqua"></i> <span>TimeSheet</span>
        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
      </a>
      <ul class="treeview-menu">
        <li><router-link to="/timesheetSubmitOld"><i class="fa fa-calendar text-aqua"></i> Timesheet Search</router-link></li>
        <li><router-link to="/timesheetSubmit"><i class="fa fa-clock-o text-aqua"></i> Timesheet Create</router-link></li>
      </ul>
    </li>
    <!-- ./TimeSheet Section -->
    <li class="header" style="font-weight: bold; font-family: Roboto; font-size: 14px; padding-bottom: 4px; padding-top: 4px">Administration</li>
    <!-- User Section -->
    <li class="treeview">
      <a href="#">
        <i class="fa fa-user text-green"></i> <span>Users</span>
        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
      </a>
      <ul class="treeview-menu">
        <li><router-link to="/userSearch"><i class="fa fa-users text-green"></i> User Search/Edit</router-link></li>
        <li><router-link to="/userCreateEdit"><i class="fa fa-user-plus text-green"></i> Users Create</router-link></li>
      </ul>
    </li>
    <!-- ./User Section -->

    <li class="header">LOGS</li>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </a>
    </router-link>

    <li class="header">PAGES</li>
    <router-link tag="li" class="pageLink" to="/login">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/404">
      <a>
        <i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </a>
    </router-link>
  </ul>
  </div>
</template>
<script>
  export default {
    name: 'SidebarName'
  }
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }
  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-90deg);
    }
  }
</style>
