const loadAll = () => {
    const promises = urls.map(url => loadImg(url))

    Promise.all(promises).then(() => {
        console.log('finish load all')
    }).catch(() => {
        console.log('something error')
    })
}

// loadAll()
