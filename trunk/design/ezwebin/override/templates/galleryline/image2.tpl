{*?template charset=utf-8?*}
{* Image - Gallery line view for Highslide Effect *}

<div class="content-view-galleryline">
    <div class="class-image"  style="height:200px">

    <div class="attribute-name"{if is_set($#image_style)} style="{$#image_style|explode(';').0}"{/if}>
        <p>{$node.name|shorten(14)|wash}</p>
       <p><a href={$node.url_alias|ezurl}>Details</a></p>
    </div>

    <div class="attribute-image"{if is_set($#image_style)} style="{$#image_style}"{/if}>

	<a href={$node.data_map.image.content[imagelarge].full_path|ezroot} class="highslide" onclick="return hs.expand(this)"
			title="{$node.object.data_map.caption.content.output.output_text}" style="float:right; margin: 0 0 10px 15px">
		<img src={$node.data_map.image.content[gallerythumbnail].full_path|ezroot}  alt=""
			title="{$node.name|shorten(14)|wash}" 
			style="width: {$node.data_map.image.content[gallerythumbnail].width}px;height:{$node.data_map.image.content[gallerythumbnail].height}px;" />
		<span>Größer!</span>
	</a>

	<div class='highslide-caption'>
		{$node.object.data_map.caption.content.output.output_text}
	</div>


    </div>

    </div>
</div>




