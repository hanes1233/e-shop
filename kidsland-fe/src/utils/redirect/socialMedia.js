
export const redirectToSocialMediaPage = (element) => {
    switch (element) {
        case 'youtube': {
            window.location.href = 'https://www.youtube.com';
            break;
        }
        case 'twitter': {
            window.location.href = 'https://www.x.com';
            break;
        }
        case 'instagram': {
            window.location.href = 'https://www.instagram.com';
            break;
        }
        case 'facebook': {
            window.location.href = 'https://www.facebook.com';
            break;
        }
        default: return (<h4>Unknown operation</h4>);
    }
}