<template>
    <div id="carosello">
        <el-carousel indicator-position="outside">
            <el-carousel-item>
                <img :src="item" alt="Cover Image" />
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script>
import cover from '../assets/pictures/cover.png'
export default {
    data() {
        return {
            item: cover
        }
    }
}
</script>

<style>
#carosello {
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* Adatta l'immagine al contenitore mantenendo le proporzioni */
    }

    .el-carousel__arrow {
        display: none;
    }

    .el-carousel__button {
        display: none !important;
    }
}
</style>