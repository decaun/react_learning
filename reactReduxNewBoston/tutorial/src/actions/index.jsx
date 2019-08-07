//action creator
export const selectUser = (user) => {
    console.log('Clicked on:',user.first)
    return{
        type:'USER_SELECTED',
        payload:user
    }
};
