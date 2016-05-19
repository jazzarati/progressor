$(document).ready(function() {
  if ($('.react-dashboard').length > 0) {
    var Dashboard = window.Components.Dashboard
    ReactDOM.render(React.createElement(Dashboard), $('.react-dashboard').get(0))
  }

  if ($('.react-project').length > 0) {
    var Project = window.Components.Project
    ReactDOM.render(React.createElement(Project), $('.react-project').get(0))
  }
})
