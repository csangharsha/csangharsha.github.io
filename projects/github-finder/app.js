const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

// Seach Input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== '') {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }else {
        // Clear Profile
        ui.clearProfile();
    }
})