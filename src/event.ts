import * as core from '@actions/core'
import * as github from '@actions/github'

export function getCreatedTag(): string | null {
    if (github.context.eventName != 'create'){
        core.info(`the event name was ${github.context.eventName}`)
        return null
    }
    
}