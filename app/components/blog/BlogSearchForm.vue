<template>
    <div class="main-content">
        <p>Search Blogs</p>
        <div class="main-form-container">
            
            <form class="form-grid">
                <label for="blog-tittle" style="text-align: left;">Title:</label>
                <input class="search-bar" type="text" id="btittle" name="blog-tittle" placeholder="Search...">
            </form>
            <button class="search-btn" type="button">Search</button>
        </div>
    </div>

</template>

<style scoped>
    .form-grid {
        display: grid;
        grid-template-columns: 1fr 7fr;
        gap: 0; 
        height: fit-content;
    }


    .main-content {
        background-color: WhiteSmoke; /* DELETE LATER */
        padding:0;
        font-size: 30px;
    }

    .main-form-container {
        background-color: white;
        padding: 40px;
    }
    
    p {
        text-align: left;
        margin: 0 0 10px 10px;
        font-size: 40px;
        font-weight: 500;
        padding: 0;
    }

    .search-btn {
        color: forestgreen;
        background-color: white;
        border: 1px solid forestgreen;
        font-size: 30px;
        padding: 5px 10px;
        border-radius: 5px;
        margin-top: 20px;
    }

    .search-bar {
        width: 100%;
        border: 1px solid gray;
    }

    input {
        font-size: large;
    }
</style>