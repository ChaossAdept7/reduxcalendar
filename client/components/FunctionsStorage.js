/**
 * Created by serj on 7/7/17.
 */

export function handleStateChange (inStateFieldName='userData',e){
    let {name, value} = e.target;
    if(!name) return false;
    this.setState({
        [inStateFieldName]:{
            ...this.state[inStateFieldName],
            [name]:value
        }
    });
}

export function checkUserData(userData) {
    let {username, password} = userData;
    let error = "";
    if(!username) error+="Empty username\n";
    if(!password) error+="Empty password\n";
    if(error.length>0){
        alert(error);
        return false;
    }
    return {
        username,
        password
    };
}
