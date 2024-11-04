import { Component, h } from "@stencil/core";



@Component({
    tag: 'ni-nav-bar-boot',

})

export class NavBar {

    
    closeMultiCollapse() {
        const multiCollapseElement = document.getElementById("multiCollapseExample1");
        multiCollapseElement.classList.remove("show")
    }

    render() {
        return (
            <div class="fixed-top">
                <nav class="navbar navbar-expand-sm">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png" alt="Company Logo" /></a>
                    <button onClick={() => this.closeMultiCollapse()} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#gallery-section">Our Work</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#testimonials">Testimonial</a>
                                </li>
                            </ul>
                            <span class="position-relative ms-auto">
                                <a href="tel:">
                                    <button type="button" class="btn navbar-text ms-auto btn-outline-primary">Call at: (888)383-5134</button>
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <h5 class="mb-1">General Services</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/kitchen-remodeling.html">Kitchen Remodeling</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/bathroom-remodeling.html">Bathroom Remodeling</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/outdoor-living.html">Outdoor Living</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/maintenance.html">Maintenance</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/additons.html">Additional</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/services/decorative-walls.html">Decorative Panel Wall</a></li>
                                </ul>       
                                <h5 class="mb-1">Painting Services</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/residential-interior.html">Residential Interior Painting</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/residential-exterior.html">Residential Exterior Painting</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/commercial-painting.html">Commercial Painting</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/re-finish-cabinets.html">Re-Finish Cabinets</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/stain-finish.html">Stain Finish</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/epoxy-floor.html">Epoxy Floor</a></li>
                                    <li class="list-group-item list-group-item-action"><a href="/public/pages/painting-services/power-washing.html">Power Washing</a></li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}