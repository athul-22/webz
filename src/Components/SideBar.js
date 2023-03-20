import React from "react";
import '../Styles/sidebar.css'

function Layout() {


    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>

            <aside class="sidebar">
                <div class="sidebar__header">
                    <span class="sidebar__toggle">
                        <i class="ri-menu-2-line"></i>
                    </span>
                    <h2 class="sidebar__brand">Tauruscode</h2>
                </div>
                <nav class="sidebar__menu">
                    <ul class="sidebar__list">
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link sidebar__link--active">
                                <i class="ri-dashboard-fill sidebar__icon">
                                </i>
                                <span class="sidebar__link-text ">
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-user-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Profile
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-folder-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Projects
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-mail-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Message
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-currency-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Payments
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-file-list-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Reports
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-bar-chart-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Analytics
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-settings-2-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Settings
                                </span>
                            </a>
                        </li>
                        <li class="sidebar__item">
                            <a href="#" class="sidebar__link">
                                <i class="ri-logout-box-line sidebar__icon">
                                </i>
                                <span class="sidebar__link-text">
                                    Log out
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main class="main">
                <div class="container">
                    <h1>Sidebar</h1>
                </div>
            </main>
            <script>
            
        </script>
        </div>
        
    );
}

export default Layout