<template>
    <div>
        <el-row>
            <el-col>
                <h1 style="color: white; align-items: center; text-align: center;">Luca Canali</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-descriptions class="margin-top" :column="3" :size="size" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            Name
                        </template>
                        Luca Canali
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-message"></i>
                        Email
                    </template>
                    canali.luca998@gmail.com
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        Place
                    </template>
                    Varese (ITA)
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-s-management"></i>
                        University
                    </template>
                    <el-tag size="small" style="cursor: pointer;">Università degli studi dell'Insubria (computer science)</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        GitHub
                    </template>
                    profilo_github
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        <el-row>
            <div class="block" style="padding-top: 80px;">
                <el-timeline>
                    <el-timeline-item timestamp="2018/4/12" placement="top">
                    <el-card>
                        <h4>Update Github template</h4>
                        <p>Tom committed 2018/4/12 20:46</p>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="present" placement="top">
                    <el-card>
                        <h4>Full-stack developer - Elmec Informatica, Brunello(VA)</h4>
                        <p>C#, .NET, Java, Javascript, Vue2, Vue3, Quasar, Flutter, SQL</p>
                        <p>Start: march 2024</p>
                    </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="11/07/2024" placement="top">
                    <el-card>
                        <h4>University of Insubria - Bachelor's Degree in Computer Science</h4>
                        <p>C, C++, Scala, Java, SQL, Kotlin</p>
                        <p>Start: september 2020</p>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </el-row>
    </div>
</template>

<script>

export default{
    components:{
    }
}
</script>

<style>
.el-descriptions-row{
    background-color: black;
    color: white;
}

</style>
