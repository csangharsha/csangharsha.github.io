class GitHub {
    constructor() {
        this.client_id = 'a3d5d9277a9af0f44b86';
        this.client_secret = 'c0e509908bab03991e978f50890d647df1cf157b';
        this.repos_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposReponse.json();
        return {
            profile,
            repos
        };
    }
}