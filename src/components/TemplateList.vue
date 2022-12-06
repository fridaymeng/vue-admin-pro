<script setup>
import { ElMessageBox } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
const props = defineProps({
  title: String
});
const tableData = [
  {
    id: 100,
    date: '2016-05-03',
    name: 'Tom',
    address: '上海'
  }
]
const column = [{
  key: 'id',
  label: '规则ID'
}, {
  key: 'name',
  label: '规则名称'
}, {
  key: 'address',
  label: '服务地址'
}, {
  key: 'location',
  label: '服务所在地'
}, {
  key: 'createdTime',
  label: '创建时间'
}, {
  key: 'operation',
  label: '操作'
}];
const handleEdit = (e) => {
  console.log(e)
}
const handleDelete = (e) => {
  console.log(e)
  ElMessageBox({
    title: '',
    confirmButtonText: '确认',
    showCancelButton: true,
    cancelButtonText: '取消',
    message: '节点删除后不可恢复。'
  })
  .then(() => {
    done()
  })
  .catch(() => {
    // catch error
  })
}
const formFilter = reactive({
  name: ''
})
const onSearch = (e) => {
  console.log(e)
}
const formRef = ref(null)
const onReset = () => {
  formRef.value.resetFields()
}
onMounted(() => {
  // NProgress.done()
})
const total = ref(1000)
</script>
<template>
  <div>
    <div class="wrap">
      <el-row>
        <el-col :span="12">
          <el-form :inline="true" :model="formFilter" ref="formRef">
            <el-form-item label="规则名称" prop="name">
              <el-input v-model="formFilter.name" placeholder="请输入" maxlength="12" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">搜索</el-button>
              <el-button type="primary" @click="onReset(formRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div style="text-align: right;">
            <el-button type="primary">新增节点</el-button>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="item in column"
          :key="item.key"
          :prop="item.key"
          :label="item.label"
        >
          <template #default v-if="item.key === 'operation'">
            <el-button link type="primary" size="small" @click="handleEdit"
              >编辑</el-button
            >
            <el-button link type="primary" size="small" @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrap">
        <el-pagination background layout="prev, pager, next, sizes" :total="total" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  padding: 0;
  .pagination-wrap {
    padding: 15px 0 0 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
