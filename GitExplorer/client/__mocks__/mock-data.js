/**
 * Created by bcuser on 4/18/17.
 */
const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };
        case '/gitapi/gists/get-basic-list':
            return {
                result: [
                    {
                        'htmlUrl': 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                        id: 'a023c7db77926ff58d35087821e12020',
                        'gitPullUrl': 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                        description: 'Simple React Component',
                        ownerLogin: 'login default',
                        avatarUrl: 'avatar default'
                    },
                    {
                        'htmlUrl': 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac',
                        id: '17f8ec886c1ae22f66501fc3cbe760ac',
                        'gitPullUrl': 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac.git',
                        description: 'React Npm Install',
                        ownerLogin: '',
                        avatarUrl: ''
                    }
                ]
            };
        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette'
                })
            };

        default:
            return {};
    }
};

export default getData;
