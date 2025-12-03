<template>
    <div class="main-content">
        <p>List Blog</p>
        <!-- <div class="main-form-container">
            <table v-if="users.length">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tin</th>
                        <th>Loại</th>
                        <th>Trạng thái</th>
                        <th>Vị trí</th>
                        <th>Ngày public</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.title }}</td>
                        <td>{{ user.category }}</td>
                        <td>{{ user.public }}</td>
                        <td>{{ user.position }}</td>
                        <td>{{ user.data_pubblic }}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<style scoped>
    .main-content {
        background-color: WhiteSmoke;
        padding:0 0 20px 0;
    }

    .main-form-container {
        background-color: white;
        padding: 20px;
    }
    
    p {
        text-align: left;
        margin: 0 0 10px 10px;
        font-size: 40px;
        font-weight: 500;
        padding: 0;
    }
</style>

<!-- <script>
import axios from 'axios'

export default {
    data() {
        return {
        users: []
        }
    },
    async created() {
        try {
        const response = await axios.get('http://localhost:3000/blogs')
        this.users = response.data
        } catch (error) {
        console.error('Error fetching users:', error)
        }
    }
}
</script> -->