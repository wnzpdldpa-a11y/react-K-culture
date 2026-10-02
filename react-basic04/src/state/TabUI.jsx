import React, (useState) from 'react'

function TabUI() {
    const [tab, setTab] = useState('detail')
    return (
        <div className="tab-menu">
            <div className="tab">
                <button onClick={() => setTab('detail')}>상세</button>
            </div>
            <div>

            </div>

        </div>
    )
}

export default TabUI