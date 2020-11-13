function randomSample(tasks) {
  const randomIndex = Math.floor(Math.random() * tasks.length)
  return tasks[randomIndex]
}

function rt_generator(data) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let rubbishTalk = ''

  if (data.options === '工程師') {
    rubbishTalk = '身為一個' + data.options + '，' + randomSample(task.engineer) + '，' + randomSample(phrase) + '吧！'
  }


  if (data.options === '設計師') {
    rubbishTalk = '身為一個' + data.options + '，' + randomSample(task.designer) + '，' + randomSample(phrase) + '吧！'
  }

  if (data.options === '創業家') {
    rubbishTalk = '身為一個' + data.options + '，' + randomSample(task.entrepreneur) + '，' + randomSample(phrase) + '吧！'
  }

  if (rubbishTalk === '') {
    return '請選擇你想說的對象'
  }

  return rubbishTalk
}

module.exports = rt_generator
