const respon = {
    data: {
        id: 1,
        title: "ngyuen quang vinh",
        author: {
            name: "vinh nguyen quang",
            email: "vinhnq@gmail.com"
        }
    }
};

const { title, author } = respon.data;
const { name, email } = author;
console.log(`Title: ${title}`);
console.log(`author nane:${name}`);
console.log(`author email: ${email}`);


