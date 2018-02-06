<template>
  <div style="background: #ffffff">
    <header class="main-header">
      <!-- Logo -->
      <router-link to="/" class="logo bg-blue-gradient">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini text-center text-yellow text-bold"><i class="fa fa-home"></i></span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg text-center text-yellow text-bold pb-2">
          <i class="fa fa-home"></i><b>  myWork</b></span>
      </router-link>
      <!-- Header Navbar -->
      <nav class="navbar navbar-toggleable-md navbar-light pt-1 pb-0" style="background-color: #018fd3;" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto" >
            <!-- Search menu-->
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-success fa fa-search" type="submit"> Search</button>
            </form>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <!-- /.Search Menu -->
            <!-- User Account Menu -->
            <li class="nav-item dropdown">
              <a href="javascript:;" class="dropdown-toggle" style="color: #ffffff" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <!-- The user image in the navbar-->
                <img src="/static/img/user.png" style="width: 40px; height: 40px" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="text-white">{{ demo.displayName }}</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">My Profile</a>
                <a class="dropdown-item" href="#">Contact Support</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="/login">Sign Out</a>
              </div>
            </li>
            <!-- /. User Account Menu -->
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <sidebar :display-name="demo.displayName" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->

      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

  </div>
  <!-- ./wrapper -->
</template>

<script>
  import { mapState } from 'vuex'
  import config from '../config'
  import Sidebar from './Sidebar'
  import 'hideseek'
  export default {
    name: 'Dash',
    components: {
      Sidebar
    },
    data: function () {
      return {
        // section: 'Dash',
        year: new Date().getFullYear(),
        classes: {
          fixed_layout: config.fixedLayout,
          hide_logo: config.hideLogoOnMobile
        },
        error: ''
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
      demo () {
        return {
          displayName: 'Utkarsh Mishra',
          avatar: '',
          email: 'utkarsh@gmail.com',
          randomCard: ''
        }
      }
    },
    methods: {
      changeloading () {
        this.$store.commit('TOGGLE_SEARCHING')
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
    background: #f8f8f8 !important;
  }
  .wrapper.fixed_layout {
    .main-header {
      position: fixed;
      width: 100%;
    }
    .content-wrapper {
      padding-top: 50px;
    }
    .main-sidebar {
      position: fixed;
      height: 100vh;
    }
  }
  .wrapper.hide_logo {
    @media (max-width: 767px) {
      .main-header .logo {
        display: none;
      }
    }
  }
  .logo-mini,
  .logo-lg {
    text-align: left;
    img {
      padding: .4em !important;
    }
  }

  .user-panel {
    height: 4em;
  }
  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }
</style>
