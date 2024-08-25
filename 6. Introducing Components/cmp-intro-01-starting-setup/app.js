const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "hany mohamed",
          phone: "010121212",
          email: "hello@gmail.com",
          isVisible: true,
        },
        {
          id: 2,
          name: "mohamed saad ",
          phone: "010121212",
          email: "hello2@gmail.com",
          isVisible: true,
        },
      ],
    };
  },
  methods: {
    ToggleEvent(id) {
      // const getOne = this.friends.find((idFriend) => idFriend === id);
      // if (getOne) {
      //   getOne.isVisible = !getOne.isVisible;
      // } else {
      //   console.error(`Friend with id ${id} not found.`);
      // }
    },
  },
});

app.component("friend-component", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="ToggleEvent(friend.id)">Show Details</button>
        <ul v-if="detailsAreVisible" >
          <li><strong>Phone:</strong>{{friend.phone}}</li>
          <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
      </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "hany mohamed",
        phone: "010121212",
        email: "hello@gmail.com",
      },
    };
  },
  methods: {
    ToggleEvent(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
