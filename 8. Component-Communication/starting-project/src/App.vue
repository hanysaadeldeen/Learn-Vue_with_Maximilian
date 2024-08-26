<template>
  <header>
    <h1>Hello this is the first project with cli</h1>
  </header>
  <ul>
    <Friend-Contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :age="friend.age"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.favorite"
    >
    </Friend-Contact>
    <!-- <Friend-Contact
      id="2"
      name="ahmed"
      age="233"
      phone-number="1232344124"
      email-address="email222@gmail.com"
    ></Friend-Contact> -->
    <!-- <Friend-Contact
      id="1"
      name="mohamed"
      age="2"
      phone-number="0109345"
      email-address="email@gmail.com"
      :is-favorite="false"
    ></Friend-Contact> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "mohamed",
          age: 12,
          phone: "1232344124",
          email: "email@gmail.com",
        },
        {
          id: 2,
          name: "hany",
          age: 12,
          phone: "0000999",
          email: "email22@gmail.com",
          favorite: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
