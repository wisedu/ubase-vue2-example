var logo = require('statics/images/logo.png')

export const state = {
  logo: logo,
  selectedMenuName: '',
  leftNav: [],
  leftSelectedMenu:{},
  topSelectedMenu:{},
  menu: [{
    title: '单招助手',
    id: 'dzzs',
    route: '/dzzs',
    children: [{
      id: 11,
      title: '单招报名管理',
      icon: 'keyboardvoice',
      visible: true,
      expanded:false,
      children: [{id: 343, title: '单招报名批次管理', url: 'http://www.baidu.com',selected:true}, {
        id: 32263,
        title: '单招报名表配置',
        url: 'http://www.qq.com',
        selected:false
      }, {id: 3643, title: '报名信息管理',selected:false}]
    },{
      id: 43311,
      title: '单招录取管理',
      icon: 'keyboardvoice',
      visible: true,
      expanded:false,
      children: [{id: 34093, title: '单招录取批次管理', url: 'http://www.baidu.com',selected:true}, {
        id: 360993,
        title: '单招录取表配置',
        url: 'http://www.qq.com',
        selected:false
      }, {id: 3648873, title: '录取信息管理',selected:false}, {id: 36483873, title: '录取信息管理',selected:false}, {id: 36438873, title: '录取信息管理',selected:false}, {id: 36485873, title: '录取信息管理',selected:false}, {id: 36348873, title: '录取信息管理',selected:false}]
    }, {
      id: 141,
      title: '单招收费管理',
      icon: 'localflorist',
      expanded:false,
      visible: true,
      children: [{id: 353, title: 'submenu2-1',selected:false}, {id: 733, title: 'submenu2-2',selected:false}, {id: 833, title: 'submenu2-3',selected:false}]
    }]
  }, {
    title: '普招助手',
    id: 'pzzs',
    route: '/pzzs',
    url: 'http://www.baidu.com'
  }, {title: '招生大数据', id: 'ddf', route: '/ddf',children: [{
    id: 1231,
    title: '单招报名管理',
    icon: 'keyboardvoice',
    visible: true,
    expanded:false,
    children: [{id: 313, title: '单招报名批次管理', url: 'http://www.baidu.com',selected:false}, {
      id: 323,
      title: '单招报名表配置',
      url: 'http://www.qq.cn',
      selected:true
    }, {id: 343, title: '报名信息管理',selected:false}]
  }, {
    id: 151,
    title: '单招收费管理',
    icon: 'localflorist',
    expanded:false,
    visible: true,
    children: [{id: 3433, title: 'submenu2-1',selected:false}, {id: 353, title: 'submenu2-2',selected:false}, {id: 363, title: 'submenu2-3',selected:false}]
  }]}]
}
