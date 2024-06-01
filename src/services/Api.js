import phones from '../data/phones.json';

export const getPhones = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(phones)
    }, 2000);
  });
}

export const getPhone = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const phone = phones.find(phone => phone.id === id)
      if (phone) {
        resolve(phone)
      } else {
        reject('Not found')
      }
    }, 2000);
  })
}