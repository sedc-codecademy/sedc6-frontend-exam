$(document).ready(async () => {
    const data = await GetData(fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json'))

    //Checks if it should do main task
    if($('#mainTask').length){
        //Object with variables to simulates references when sent by function parameters
        let mainVars = {
            maxItemsPerPage : 10,
            lastPage : undefined,
            page : 1,
            sortby : undefined,
            search : undefined,
            tag : undefined,
            activeOnly : false
        }

        //Fills the tags dropdown
        new Set(
            data.map(band => band.tags)
                .reduce((tagPrev, tag) => [...tagPrev, ...tag])
        ).forEach(tag => $('#tags').append(`<option value="${tag}">${tag}</option>`))

        //Renders data to the table
        FillMainTaskTable(data, mainVars)
        
        $('#prevBtn').click(() => {
            mainVars.page = mainVars.page > 1 ? mainVars.page -= 1 : mainVars.page
            FillMainTaskTable(data, mainVars)
        })

        $('#nextBtn').click(() => {
            mainVars.page = mainVars.page < mainVars.lastPage ? mainVars.page += 1 : mainVars.page
            FillMainTaskTable(data, mainVars)
        })

        $('#sortbyName').click(() => {
            $('#sortbyAlbums').html('Albums')
            mainVars.sortby = mainVars.sortby === 'nameAsc' ? 'nameDsc' : 'nameAsc'
            $('#sortbyName').html(mainVars.sortby === 'nameAsc' ? '<u>Band Name &uarr;</u>' : '<u>Band Name &darr;</u>')
            FillMainTaskTable(data, mainVars)
        })

        $('#sortbyAlbums').click(() => {
            $('#sortbyName').html('Band Name')
            mainVars.sortby = mainVars.sortby === 'albumsDsc' ? 'albumsAsc' : 'albumsDsc'
            $('#sortbyAlbums').html(mainVars.sortby === 'albumsAsc' ? '<u>Albums &uarr;</u>' : '<u>Albums &darr;</u>')
            FillMainTaskTable(data, mainVars)
        })

        $('#search').on('input', () => {
            mainVars.page = 1
            const searchTerm = $('#search').val()
            mainVars.search = searchTerm !== '' ? searchTerm : undefined
            FillMainTaskTable(data, mainVars)
        })

        $('#tags').change(() => {
            mainVars.page = 1
            const selectedTag = $('#tags').find(':selected').val()
            mainVars.tag = selectedTag !== 'all' ? selectedTag : undefined
            FillMainTaskTable(data, mainVars)
        })

        $('#activeOnly').change(() => {
            mainVars.page = 1
            mainVars.activeOnly = $('#activeOnly').is(':checked')
            FillMainTaskTable(data, mainVars)
        })
    }

    //Checks if it should do extra task
    if($('#extraTask').length){
        //Fills Bands dropdown
        data.forEach(band => $('#bands').append(`<option value="${band.name}">${band.name}</option>`))

        $('#bands').change(() => {
            const selectedBand = $('#bands').find(':selected').val()
            const band = data.filter(item => item.name.toLowerCase() === selectedBand.toLowerCase()).reduce(item => item)
            FillExtraTaskTable(band)
        })
    }

})

//Returns the data from the response as json
async function GetData(res){
    let data = []
    await res.then(resData => resData.json())
            .then(resData => data = resData)
    return [...data]
}

//Main Task functoin
function FillMainTaskTable(data, appVars){
    $('#dataTable').html('')
    $('#pageNum').html(appVars.page)

    let tableData = [...data]

    //Filtering by...
    if(appVars.search){
        tableData = tableData.filter(band => band.name.toLowerCase().includes(appVars.search.toLowerCase()))
    }
    if(appVars.tag){
        tableData = tableData.filter(band => band.tags.includes(appVars.tag))
    }
    if(appVars.activeOnly){
        tableData = tableData.filter(band => band.active)
    }

    //Sorting by...
    switch(appVars.sortby){
        case 'nameAsc' : tableData.sort((bandPrev, band) => bandPrev.name.localeCompare(band.name))
            break
        case 'nameDsc' : tableData.sort((bandPrev, band) => band.name.localeCompare(bandPrev.name))
            break
        case 'albumsAsc' : tableData.sort((bandPrev, band) => bandPrev.albums.length - band.albums.length)
            break
        case 'albumsDsc' : tableData.sort((bandPrev, band) => band.albums.length - bandPrev.albums.length)
            break
        default :
    }

    //Determines the last page based on the filtered data
    appVars.lastPage = Math.ceil(tableData.length / appVars.maxItemsPerPage)
    //Calculates the from-to ids to be filled in the table
    const fillFromId = (appVars.page - 1) * appVars.maxItemsPerPage
    const fillToId = appVars.page !== appVars.lastPage ? appVars.page * appVars.maxItemsPerPage : tableData.length

    //Fills the table with the from-to data
    if(tableData !== 0){
        for(let id = fillFromId; id < fillToId; id += 1){
            const band = tableData[id]
            $('#dataTable').append(`
            <tr>
                <td>${id + 1}</td>
                <td>${band.name}</td>
                <td>${band.active ? 'Yes' : 'No'}</td>
                <td>${band.tags.join(', ')}</td>
                <td>${band.members.map(member => member.name).join('</br>')}</td>
                <td>${band.albums.length}</td>
            </tr>
            `)
        }
    }
}

//Extra Task function
function FillExtraTaskTable(band){
    $('#dataTable').html('')

    const tableBand = {...band}

    const pastMembers = tableBand.members.filter(member => member.former).map(member => member.name)
    let albumsTypes = {}
    tableBand.albums.map(album => album.type)
        .forEach(type => albumsTypes.hasOwnProperty(`${type}`) ? albumsTypes[`${type}`] += 1 : albumsTypes[`${type}`] = 1)
    const albumsYears = tableBand.albums.map(album => album.year)
    const albumsSorted = tableBand.albums.sort((albumPrev, album) => albumPrev.year - album.year).map(album => album.name)

    let albumsSummary = ''
    for(key in albumsTypes){ albumsSummary += `${key}: ${albumsTypes[key]}</br>` }

    $('#dataTable').append(`
    <tr>
        <td>${pastMembers.join('</br>')}</td>
        <td>${albumsSummary}</td>
        <td>${Math.min(...albumsYears)} - ${tableBand.active ? new Date().getFullYear() : Math.max(...albumsYears)}</td>
        <td>${albumsSorted.join('</br>')}</td>
    </tr>
    `)
    
}