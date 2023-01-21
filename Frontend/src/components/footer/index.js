import React from 'react'

import { footerText } from '../../asserts'

export default function Footer() {
    return (
        <>
            <footer className="mt-auto p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    {footerText}
                </span>
            </footer>

        </>
    )
}