const { LoginPage } = require('./LoginPage');
const { JobsPage } = require('./JobsPage')
const { DashboardPage } = require('./DashboardPage')

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.jobsPage = new JobsPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }


    getLoginPage() {
        return this.loginPage;
    }

    getJobsPage() {
        return this.jobsPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

}

module.exports = {POManager};


