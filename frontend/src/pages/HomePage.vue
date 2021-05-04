<template>
  <main>
    <section class="d-flex px-3 mt-2 justify-content-end">
      <el-popover placement="bottom" width="300" :visible="visible">
        <h3>Add New Contact</h3>
        <el-input
          placeholder="First Name"
          v-model="firstName"
          type="text"
        ></el-input>
        <el-input
          placeholder="Last Name"
          v-model="lastName"
          type="text"
        ></el-input>
        <el-input
          placeholder="Last Name"
          v-model="contacts"
          type="number"
        ></el-input>
        <div class="d-flex justify-content-end">
          <el-button size="mini" type="text" @click="toggleVisibility">
            Cancel
          </el-button>
          <el-button type="primary" size="mini" @click="saveContact">
            Save
          </el-button>
        </div>
        <template #reference>
          <el-button type="primary" @click="toggleVisibility">
            Add Contact
          </el-button>
        </template>
      </el-popover>
    </section>
    <ContactTree />
  </main>
</template>

<script lang="ts">
import ContactTree from "./components/home/ContactTree.vue";
import http from "../../utils/http";
import { ref } from "vue";

export default {
  name: "HomePage",
  components: { ContactTree },
  setup() {
    const visible = ref(false);
    const firstName = ref(null);
    const lastName = ref(null);
    const contacts = ref(0);
    const toggleVisibility = () => {
      visible.value = !visible.value;
    };

    const saveContact = () => {
      http.post("/contacts/", {
        firstName: "test",
        lastName: "me",
        numberOfContacts: 0,
        addedBy: 1,
      });
    };

    return {
      visible,
      toggleVisibility,
      saveContact,
      firstName,
      lastName,
      contacts,
    };
  },
  async mounted() {
    const contacts = await http.get("/contacts/");

    console.log(contacts);
  },
};
</script>

<style scoped lang="scss">
.el-input {
  margin-bottom: 0.5rem;
}
</style>
