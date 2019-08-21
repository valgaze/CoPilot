<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>


    <router-link tag="li" class="pageLink" to="/start">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Open SAP</span>
      </a>
    </router-link>


    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>

          <router-link tag="li" class="pageLink" to="/action1">
          <a href="#">
            <i class="fa fa-file-word-o"></i> Action 1
          </a>
          </router-link>
        </li>
        <li>
        <router-link tag="li" class="pageLink" to="/action2"> 
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Action 2
          </a>
        </router-link>
        </li>
        <li>
          <router-link tag="li" class="pageLink" to="/action3">
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Action 3
          </a>
          </router-link>
        </li>
        
        <li>
          <router-link tag="li" class="pageLink" to="/action4">
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Action 4
        </a>
        </router-link>
          </li>
          <li>
          <router-link tag="li" class="pageLink" to="/tasks">
              <a>
                <i class="fa fa-tasks"></i>
                <span class="page">Tasks</span>
              </a>
            </router-link>
          </li>


      </ul>
    </li>

  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
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
