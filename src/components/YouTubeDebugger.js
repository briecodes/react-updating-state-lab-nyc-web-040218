import React from 'react';

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bits = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            }),
        })
    }

    res = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.bits} className='bitrate'>Bitrate</button>
                <button onClick={this.res} className='resolution'>Resolution</button>
            </div>
        )
    }
}