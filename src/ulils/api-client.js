export {TOKEN}
export {DATA}

function DATA(userEmail, userPassword, Send) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (userEmail === 'test@mail.ru' && userPassword === 'Admin11!') {
              resolve({token: 'test', expires: Date.now() + 1000 * 60 * 60});
          } else {
              reject({code: 401, description: 'Неправильный адрес электронной почты или пароль'})
          }
          Send(false);
      }, 2000)
    })
  }

function TOKEN(result) {
    const tokenString = localStorage.getItem('AuthorizationToken');
    if (!tokenString) {
        localStorage.setItem('AuthorizationToken', JSON.stringify(result))
    }
    ;
    const token = JSON.parse(tokenString);
    const NEW = new Date();

    if (token.token !== result.token) {
        localStorage.setItem('AuthorizationToken', JSON.stringify(result))
    } else if (NEW.getTime() > token.expires) {
        localStorage.removeItem('AuthorizationToken')
        localStorage.setItem('AuthorizationToken', JSON.stringify(result))
    }
}