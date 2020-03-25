<template>
<div class="footer">
    <p>صناعة مصرية <i class="fas fa-heart"></i></p>
</div>
</template>

<style lang="scss" scoped="">
@import '~/assets/sass/_vars.scss';
@import '~/assets/sass/_mixins.scss';

.footer {
    background-color: #e0e0e0;
    text-align: center;
    color: $primary-color;
    margin: 0;
    height: 65px;
    line-height: 65px;
    vertical-align: middle;

    p {
        margin: 0;
    }

    i {
        margin-right: 5px;
        color: red;
    }
}
</style>
