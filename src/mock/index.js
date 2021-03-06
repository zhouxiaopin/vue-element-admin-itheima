import Mock from 'mockjs'
import TableAPI from './table'
import ArticlesAPI from './articles'

Mock.setup({
  timeout: '1000'
})

Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
Mock.mock(/\/articles\/list\.*/, 'get', ArticlesAPI.list)
