const unknown = 'unknown';
const PARAGRAPH=0;
const TEXT=1;
const DEFAULT=PARAGRAPH;
const types = ['paragraph', 'text'];

export default [
    {
        id: 'login',
        label: 'loginName',
        type: types[DEFAULT],
        sample: 'login-' + unknown
    },
    {
    label: 'Avatar Url',
    type: types[DEFAULT],
    sample: 'ai' + unknown
},
{
    id: 'avatar_url',
        label: 'Url',
    type: types[DEFAULT],
    sample: 'url' + unknown
},
{
    id: 'html_url',
        label: 'HTML Url',
    type: types[DEFAULT],
    sample: 'htmlUrl' + unknown
},
{
    id: 'followers_url',
        label: 'Followers URL',
    type: types[DEFAULT],
    sample: 'followersUrl' + unknown
}
]