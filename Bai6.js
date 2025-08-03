function taoNguoiDung(name, age = 18, role = `user`) {
    const user= {
        name: name,
            age: age,
                role:role
    }
    return user;
};

console.log(taoNguoiDung(`Nguyen Quang Vinh`, 20, `dev`));
console.log(taoNguoiDung(`Nguyen Quang Vi`));


