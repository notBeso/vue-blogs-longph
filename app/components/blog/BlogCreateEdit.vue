<template>
    <div class="main-content">
        <p>New Blogs</p>
        <div class="main-form-container">
            <form>
                <label for="blog-tittle">Tiêu đề:</label>
                <input type="text" id="btittle" name="blog-tittle">
            </form>

            <form>
                <label for="blog-describe">Mô tả ngắn:</label>
                <textarea id="bdescribe" name="blog-describe" style="height: 100px;"></textarea>
            </form>

            <form>
                <label for="blog-detail">Chi tiết:</label>
                <textarea id="bdetail" name="blog-detail" style="height: 250px;"></textarea>
            </form>

            <form action="/upload-target" method="post" enctype="multipart/form-data">
                <input type="file" id="fileUpload" style="border: none;">
                
            </form>

            <label for="blog-location">Vị trí:</label>    
            <form style="display:flex;">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <span class="form-check-label" for="exampleRadios1">
                    Việt Nam
                </span>

                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <span class="form-check-label" for="exampleRadios1">
                    Châu Á
                </span>

                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <span class="form-check-label" for="exampleRadios1">
                    Châu Âu
                </span>

                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <span class="form-check-label" for="exampleRadios1">
                    Châu Mỹ
                </span>
            </form>

            <label for="blog-location">Public:</label>
            <form style="display:flex;">
                
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <span class="form-check-label" for="inlineRadio1">Yes</span>
                
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <span class="form-check-label" for="inlineRadio2">No</span>
                
            </form>

            <div class="double-form">
                <div class="form-slot">
                    <form>
                        <label for="blog-tittle">Loại:</label>
                        <select class="form-control" id="exampleFormControlSelect1" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </form>
                </div>
                <div class="form-slot">
                    <form>
                        <label for="blog-tittle">Date Public:</label>
                        <input type="date" id="myDate" name="selectedDate">
                    </form>
                </div>
            </div>
            
        </div>
        <button class="submit-btn" type="button">Submit</button>
        <button class="clear-btn" type="button">Clear</button>
    </div>
</template>

<style scoped>
    .main-content {
        background-color: WhiteSmoke; /* DELETE LATER */
        overflow: scroll;
        height: calc(100vh - 20px);
        padding:0 0 20px 0;
    }

    .main-form-container {
        background-color: white;
        padding: 20px;
        text-align: left;
        overflow: scroll;
    }
    
    p {
        text-align: left;
        margin: 0 0 10px 10px;
        font-size: 40px;
        font-weight: 500;
        padding: 0;
    }

    form {
        margin-bottom: 30px;
    }

    label {
        font-size: 25px;
        display: block;
        margin-bottom: 10px;
    }

    textarea{
        width: 98%;
        min-height: 100px;
        font-size: 25px;
        font-weight: 200;
        border: 1px solid gray;
        resize: vertical;
        overflow: scroll;
    }

    input{
        width: 98%;
        font-size: 25px;
        font-weight: 200;
        border: 1px solid gray;
    }

    select {
        width: 98%;
    }

    .double-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0; 
    }

    .form-slot {
        padding: auto;
        text-align: left;
    }

    .form-check-label {
        display: flex;
        margin-right: 2%;
        font-size: larger;
    }
    .form-check-input {
        width: fit-content;
    }

    .form-control {
        height: 35px;
        border: 1px solid gray;
        font-size: larger;
    }

    .submit-btn , .clear-btn {
        border-radius: 5px;
        margin: 5px;
        padding: 6px 10px;
        border: none;
        color: white;
        margin-top: 15px;
    }

    .submit-btn {
        background-color: forestgreen;

    }

    .clear-btn {
        background-color: royalblue;
    }
</style>